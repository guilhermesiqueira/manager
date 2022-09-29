import { AxiosResponse } from "axios";
import { apiPost } from "..";

const uploadFilesApi = {
  uploadFile: (file: Blob): Promise<AxiosResponse<any>> =>
    apiPost("rails/active_store/direct_uploads", file),
};

export default uploadFilesApi;
