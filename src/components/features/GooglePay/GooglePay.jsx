import { useEffect } from "react";
import { GooglePayButton } from "./Styles";
import { useCreateCertificate } from "../../../hooks/querys/certificate";
import { toast } from "react-toastify";
import useAuthStore from "../../../Stores/auth";
import { useCart } from "../../../Stores/CartContext";
import PropTypes from "prop-types";

const GoogleButton = ({ disabled, price, onClose }) => {
  const { clearCart } = useCart();
  const id_user = useAuthStore((state) => state?.auth?.user?._id);
  const { cartItems: data } = useCart();
  const { mutate: createCertificate } = useCreateCertificate({
    onSuccess: () => {
      toast.success("Compra efetuada com sucesso");
    },
  });
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const initializeGooglePay = () => {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: "TEST",
      });

      const paymentDataRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Example Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: price,
          currencyCode: "BRL",
          countryCode: "BR",
        },
      };

      const button = paymentsClient.createButton({
        onClick: () => {
          paymentsClient
            .loadPaymentData(paymentDataRequest)
            .then((paymentData) => {
              createCertificate({ id_user: id_user, tree: data });
              clearCart();
              if (onClose) onClose();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        },
      });

      const container = document.getElementById("google-pay-button");
      if (container && container.children.length === 0) {
        container.appendChild(button);
      }
    };

    loadScript("https://pay.google.com/gp/p/js/pay.js")
      .then(initializeGooglePay)
      .catch((error) => {
        console.error("Failed to load Google Pay script:", error);
      });
  }, []);

  return (
    <GooglePayButton
      disabled={disabled}
      id="google-pay-button"
    ></GooglePayButton>
  );
};
GoogleButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};
export default GoogleButton;
