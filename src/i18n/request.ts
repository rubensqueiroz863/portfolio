import { getLocale } from '@/lib/getLocale';
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Pega a localização pelo getLocale
  const locale = await getLocale();
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});