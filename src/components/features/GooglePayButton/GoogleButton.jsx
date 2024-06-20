import React, { useEffect } from "react";
import { GooglePayButton } from "../GooglePayButton/Styles";

const GoogleButton = () => {
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

    // Função para inicializar o Google Pay
    const initializeGooglePay = () => {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: "TEST", // LEMBRAR DE MUDAR PARA 'PRODUCTION' QUANDO ESTIVER PRONTO
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
          totalPrice: "1.00",
          currencyCode: "USD",
          countryCode: "US",
        },
      };

      const button = paymentsClient.createButton({
        onClick: () => {
          paymentsClient
            .loadPaymentData(paymentDataRequest)
            .then((paymentData) => {
              console.log("Payment Data:", paymentData);
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

  return <GooglePayButton id="google-pay-button"></GooglePayButton>;
};

export default GoogleButton;

// É importante lembrar de fazer a linkagem da carteira do cliente com o botão para que seja feito testes! Não pode ser passado para PRODUCTION até que todos os testes
// sejam feitos e seja garantido que a carteira esteja funcionando corretamente
