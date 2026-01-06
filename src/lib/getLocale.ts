import { headers } from "next/headers";

export async function getLocale(): Promise<"pt" | "en"> {
  // Lé o header "Accpt-Language da requisição HTTP"
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  // Se o header não existir o português é usado como padrão
  if (!acceptLanguage) return "pt";

  // Pega o idioma principal
  // Ex: "pt-BR,pt;q=0.9,en-US;q=0.8" → "pt-BR"
  const primaryLanguage = acceptLanguage.split(",")[0];

  // Remove a região
  //EX: pt-BR -> "pt"
  const lang = primaryLanguage.split("-")[0];

  // Se for inglês, retorna "en". Qualquer outra retorna "pt"
  return lang === "en" ? "en" : "pt";
}