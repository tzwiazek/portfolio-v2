import { Layout } from "gatsby-plugin-image";
import { MainImageProps } from "gatsby-plugin-image/dist/src/components/main-image";

export interface SelectedProjectImageAllData {
  allFile: {
    edges: SelectedProjectImage[];
  }
};

export interface SelectedProjectImage {
  node: {
    childImageSharp: {
      gatsbyImageData: {
        backgroundColor?: string;
        height: number;
        images: Pick<MainImageProps, "sources" | "fallback">;
        layout: Layout;
        width: number;
      }
    },
    name: string;
  }
};