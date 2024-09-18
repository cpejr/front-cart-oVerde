import {
  StyledCard,
  OrangeButton,
  Line,
  Tags,
  Tag,
  Image,
  LineSVG,
  Group,
  ButtonDiv,
} from "./Styles";
import PropTypes from "prop-types";
export default function Card({ data }) {
  let categories = [...data.id_categoryPrice, ...data.id_categoryType];
  return (
    <StyledCard>
      <Image>
        <img src={data.eventUpload} />
      </Image>
      <Group>
        <LineSVG></LineSVG>
        <Line>{data.name}</Line>
      </Group>
      <Line>
        <p>{data.shortDescription}</p>
      </Line>

      <Tags>
        {categories?.map((category, index) => (
          <Tag key={index}>{category?.name}</Tag>
        ))}
      </Tags>
      <ButtonDiv>
        <OrangeButton
          onClick={(event) => {
            event.stopPropagation();
            window.open(data?.link, "_blank");
          }}
        >
          Link
        </OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
