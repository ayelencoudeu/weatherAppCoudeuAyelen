/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios'
interface RequestOptions {
  method: string
  url: string
}
export const ajax = async (options: RequestOptions) => await axios.request(options).then(response => response.data)
