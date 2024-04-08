import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
  PrismicLink,
} from "@prismicio/react";
import styles from "./index.module.css";
import { Link } from "@remix-run/react";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return (
      <PrismicLink
        field={node.data}
        internalComponent={({ href, ...props }) =>
          href ? <Link to={href} {...props} /> : null
        }
      >
        {children}
      </PrismicLink>
    );
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section className={styles.richtext}>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
};

export default RichText;
