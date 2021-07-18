import { SetStateAction, useState, useEffect, Dispatch } from "react";
import { UseScrollInterface } from "../interfaces/useScroll.interface";

export function useScroll(): UseScrollInterface {
  const [lastScrollTop, setLastScrollTop]: [number, Dispatch<SetStateAction<number>>] = useState(0);
  const [bodyOffset, setBodyOffset]: [DOMRect, Dispatch<SetStateAction<DOMRect>>] = useState(document.body.getBoundingClientRect());
  const [scrollY, setScrollY]: [number, Dispatch<SetStateAction<number>>] = useState(bodyOffset.top);
  const [scrollX, setScrollX]: [number, Dispatch<SetStateAction<number>>] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection]: [string, (value: string) => void] = useState(null);

  const listener = (): void => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop < -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect((): () => void => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}