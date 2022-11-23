import storiesApi from "services/api/storiesApi";
import { CreateStory, EditStory } from "types/apiResponses/story";
import { useUploadFile } from "../useUploadFile";

function useStories() {
  async function getStories(nonProfitId: number | string) {
    const { data: stories } = await storiesApi.getNonProfitStories(nonProfitId);

    return stories;
  }

  async function getStory(id: any) {
    const { data: story } = await storiesApi.getStory(id);

    return story;
  }

  async function createStory(data: CreateStory, file: string) {
    const upload = useUploadFile(data.image);

    let story;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          story = storiesApi.createStory({
            ...data,
            image: blob.signed_id,
          });
        }
      });
    } else {
      story = storiesApi.createStory(data);
    }
    return story;
  }

  async function updateStory(data: EditStory, file: string) {
    const upload = useUploadFile(data.image);
    let story;

    if (file) {
      upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          story = storiesApi.updateStory(data.id, {
            ...data,
            image: blob.signed_id,
          });
        }
      });
    } else {
      const currentStory = data;
      delete currentStory.image;
      story = storiesApi.updateStory(data.id, currentStory);
    }
    return story;
  }

  return {
    getStories,
    getStory,
    createStory,
    updateStory,
  };
}

export default useStories;
