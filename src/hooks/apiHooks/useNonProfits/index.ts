import { useCallback, useState } from "react";
import nonProfitsApi from "services/api/nonProfitsApi";
import { CreateNonProfit } from "types/apiResponses/nonProfit";
import { CreateStory } from "types/apiResponses/story";
import NonProfit from "types/entities/NonProfit";
import { useUploadFile } from "../useUploadFile";

function useNonProfits() {
  const [nonProfits, setNonProfits] = useState<NonProfit[]>([]);
  const [page, setPage] = useState(1);

  const getNonProfits = useCallback(async () => {
    const { data: allNonProfits } = await nonProfitsApi.getNonProfitsList({
      page,
      perPage: 15,
    });

    setNonProfits((oldNonProfits) => [...oldNonProfits, ...allNonProfits]);

    return allNonProfits;
  }, [page]);

  function incrementPage() {
    setPage((oldPage) => oldPage + 1);
  }

  async function getNonProfit(id: any) {
    const { data: nonProfit } = await nonProfitsApi.getNonProfit(id);

    return nonProfit;
  }

  async function uploadStories(stories: CreateStory[] | undefined) {
    const newStories: CreateStory[] = [];
    await stories?.map(async (story: CreateStory) => {
      if (story.image) {
        const upload = useUploadFile(story.image);

        await upload.create((error: Error, blob: any) => {
          if (error) {
            throw error;
          } else {
            newStories.push({ ...story, image: blob.signed_id });
            console.log(newStories);
          }
        });
      } else {
        newStories.push(story);
        console.log(newStories);
      }
    });

    return newStories;
  }

  async function createNonProfit(data: CreateNonProfit) {
    let nonProfit;
    let newStories: CreateStory[] = [];

    if (data.logo) {
      newStories = await uploadStories(data.storiesAttributes);
      console.log("aqui", newStories);
      const upload = useUploadFile(data.logo);
      await upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          nonProfit = nonProfitsApi.createNonProfit({
            ...data,
            logo: blob.signed_id,
            storiesAttributes: newStories,
          });
        }
      });
    } else {
      newStories = await uploadStories(data.storiesAttributes);
      console.log("aqui", newStories);
      nonProfit = nonProfitsApi.createNonProfit({
        ...data,
        storiesAttributes: newStories,
      });
    }
    return nonProfit;
  }

  async function updateNonProfit(data: CreateNonProfit) {
    console.log("update");
    let stories: CreateStory[] | undefined = data.storiesAttributes;

    if (stories) {
      stories = await uploadStories(stories);
    }

    let nonProfit;

    if (data.logo) {
      const upload = useUploadFile(data.logo);
      await upload.create((error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          nonProfit = nonProfitsApi.updateNonProfit(data.id, {
            ...data,
            logo: blob.signed_id,
            storiesAttributes: stories,
          });
        }
      });
    } else {
      console.log(stories);
      nonProfit = nonProfitsApi.updateNonProfit(data.id, {
        ...data,
        storiesAttributes: stories,
      });
    }
    return nonProfit;
  }

  return {
    nonProfits,
    getNonProfits,
    incrementPage,
    getNonProfit,
    createNonProfit,
    updateNonProfit,
  };
}

export default useNonProfits;
