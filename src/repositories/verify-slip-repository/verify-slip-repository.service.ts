import { Injectable } from '@nestjs/common';
import axios, { AxiosHeaders, RawAxiosRequestHeaders } from 'axios';
import { ApiPath, IResVerifySlip } from '../types';

const axiosVerifySlip = axios.create({
  baseURL: `https://developer.easyslip.com`,
});

@Injectable()
export class VerifySlipRepositoryService {
  private setHeader() {
    const headers: RawAxiosRequestHeaders | AxiosHeaders = {
      Authorization: `Bearer 6d1ad747-dd08-4123-a0ed-078555435f08`,
    };
    return headers;
  }

  async verifySlip(formData: FormData) {
    const headers = this.setHeader();
    const { data } = await axiosVerifySlip.post<IResVerifySlip>(
      `${ApiPath.VERIFY}`,
      formData,
      {
        headers,
      },
    );
    return data;
  }
}
