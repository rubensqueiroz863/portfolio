import { useEffect, useRef, useState } from "react";

// T = elemento dom genérico. ex: HTMLDivElement
export function useOnScreen<T extends Element>() {
  // Referencia do IntersectionObserver
  const ref = useRef<T | null>(null);
  // Estado de visibilidade com useState
  const [isVisible, setIsVisible] = useState(false);

  // useEffect faz verificação se o ref está null, cria o observer para saber se está visivel, atualiza a visibilidade
  useEffect(() => {
    // verificação se ref é null
    if (!ref.current) return;
    // criação do observer
    const observer = new IntersectionObserver(([entry]) => {
      // verifica se o elemento entrou no viewport
      if (entry.isIntersecting) {
        // atualiza para visivel
        setIsVisible(true);
        // para de observar
        observer.disconnect();
      }
    });
    // Começa a observar o elemento e dispara ao entrar na tela
    observer.observe(ref.current);
    // cleanup do efeito para evitar memory leaks
    return () => observer.disconnect();
  }, []);

  // retorno do hook
  return { ref, isVisible };
}

// Chamar hook: const { ref, isVisible } = useOnScreen<HTMLDivElement>();