import impressionCardsApi from "services/api/impressionCardsApi";
import ImpressionCard from "types/entities/ImpressionCard";
import { useUploadFile } from "../useUploadFile";

function useImpressionCards() {
  async function getAllImpressionCards() {
    const { data: impressionCards } =
      await impressionCardsApi.getImpressionCardsList();

    return impressionCards;
  }

  async function getImpressionCard(id: any) {
    const { data: impressionCard } = await impressionCardsApi.getImpressionCard(
      id,
    );

    return impressionCard;
  }

  async function createImpressionCard(data: ImpressionCard, file: string) {
    const upload = useUploadFile(data.image);

    let impressionCard;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          impressionCard = impressionCardsApi.createImpressionCard({
            ...data,
            image: blob.signed_id,
          });
        }
      });
    } else {
      impressionCard = impressionCardsApi.createImpressionCard(data);
    }
    return impressionCard;
  }

  async function updateImpressionCard(data: ImpressionCard, file: string) {
    const upload = useUploadFile(data.image);
    let impressionCard;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          impressionCard = impressionCardsApi.updateImpressionCard(data.id, {
            ...data,
            image: blob.signed_id,
          });
        }
      });
    } else {
      const currentImpressionCard = data;
      delete currentImpressionCard.image;
      impressionCard = impressionCardsApi.updateImpressionCard(
        data.id,
        currentImpressionCard,
      );
    }
    return impressionCard;
  }

  return {
    createImpressionCard,
    getAllImpressionCards,
    getImpressionCard,
    updateImpressionCard,
  };
}

export default useImpressionCards;
