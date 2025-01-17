import { createElement } from "react";
import Link from "@/components/Link";
import { NoteAlert, WarningAlert } from "@/components/Alert";
import {
  HeadingRendererHelper,
  classMapping,
  getPlainTextFromProps,
  redirectRedditAndGithubLinksToWebsite,
} from "./utils";
import { Accordion } from "@mantine/core";
import { cn, getMarkdownFromProps } from "@/lib/utils";
import { fontMono } from "@/lib/fonts";
import { beginnersGuideFaqs } from "@/lib/CONSTANTS";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ReactMarkdown from "react-markdown";

export const HeadingRenderer = (
  props: any,
  level: 1 | 2 | 3 | 4,
  slugger: any
) => {
  const { slug, text, href } = HeadingRendererHelper(props, slugger);

  return (
    <Link href={href}>
      {createElement(
        "h" + level,
        {
          className: classMapping["h" + level],
          id: slug,
        },
        text
      )}
    </Link>
  );
};

export function LinkRenderer(props: any) {
  const newProps = { ...props };
  let href = redirectRedditAndGithubLinksToWebsite(newProps.href);

  return (
    <Link
      className={cn("break-words font-semibold ", fontMono.className)}
      href={href}
    >
      {props.children}
    </Link>
  );
}

export function LiRenderer(props: any, showOnlyStarredLinks?: boolean) {
  const md = getMarkdownFromProps(props);
  const isStarred = md.includes("⭐");

  const noteStarter = NOTE_STARTERS.find((item) => md.includes(item));

  // make a separate helper function to dynamically create the relevant html tag, and populate the data
  const getLinkData = (md: string, isModified: boolean) => {
    if (showOnlyStarredLinks && !isStarred) return <></>;

    if (!isModified) {
      return (
        <li className={`list-disc ml-6 my-2 text-md text-slate-200 `}>
          {props.children}
        </li>
      );
    }
    return <UnstyledMarkdownRenderer>{md}</UnstyledMarkdownRenderer>;
  };

  if (noteStarter) {
    const splitData = md.split(noteStarter);
    return (
      <>
        {getLinkData(splitData[0], true)}
        <NoteAlert message={splitData[1]} />
      </>
    );
  }

  const warningStarter = WARNING_STARTERS.find((item) => md.includes(item));
  if (warningStarter) {
    const splitData = md.split(warningStarter);
    return (
      <>
        {getLinkData(splitData[0], true)}
        <WarningAlert message={splitData[1]} />
      </>
    );
  }

  return getLinkData(md, false);
}

const NOTE_STARTERS = ["!!!note", "**Note** - ", "!!!info"];
const WARNING_STARTERS = ["!!!warning", "**Warning** - "];

export const PRenderer = (props: any) => {
  const md = getMarkdownFromProps(props);

  const noteStarter = NOTE_STARTERS.find((item) => md.includes(item));
  if (noteStarter) {
    const message = md.split(noteStarter)[1];
    return (
      <>
        <MarkdownRenderer>{md.split(noteStarter)[0]}</MarkdownRenderer>
        <NoteAlert message={message} />
      </>
    );
  }

  const warningStarter = WARNING_STARTERS.find((item) => md.startsWith(item));
  if (warningStarter) {
    const message = md.split(warningStarter)[1];
    return <WarningAlert message={message} />;
  } else {
    return <p>{props.children}</p>;
  }
};

export const CodeRenderer = (props: any, category?: string) => {
  if (category !== "base64") {
    return <code {...props} />;
  } else {
    try {
      const text = getPlainTextFromProps(props);
      const decrypted = atob(text);
      const split = decrypted.split("\n");
      return (
        <>
          {split.map((link, index) => (
            <Link
              key={index}
              href={link}
              className={cn(
                "font-semibold block break-words",
                fontMono.className
              )}
            >
              {link}
            </Link>
          ))}
        </>
      );
    } catch (e) {
      return <code {...props} />;
    }
  }
};

// update this w.o any padding or margin => such that calling this multiple times wont change the elements appearance
const UnstyledMarkdownRenderer = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: LinkRenderer,
        // p: PRenderer, // for beginners guide only
        // li: LiRenderer, //for storage only
        // code: CodeRenderer,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

const FaqMarkdownRenderer = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        p: PRenderer, // for beginners guide only
        a: LinkRenderer,
        li: LiRenderer, //for storage only
        code: CodeRenderer,
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export const BlockquoteRenderer = (props: any, category?: string) => {
  if (!category || category.toLowerCase() !== "beginners-guide") {
    return <blockquote>{props.children}</blockquote>;
  }

  return (
    <Accordion
      variant="separated"
      radius="md"
      className="max-w-[80%] md:max-w-[60%]  mx-auto"
    >
      {beginnersGuideFaqs.map((item, index) => (
        <Accordion.Item key={index} value={item.question}>
          <Accordion.Control>{item.question}</Accordion.Control>
          <Accordion.Panel>
            <FaqMarkdownRenderer>{item.answer}</FaqMarkdownRenderer>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export const UlRenderer = (props: any) => {
  return (
    <ul
      className="rounded-xl list-none"
      style={{
        background: "#11151F",
        padding: "0.5rem 1rem",
      }}
    >
      {props.children}
    </ul>
  );
};

const ADDITION_STARTERS = ["Added"];
const REMOVAL_STARTERS = ["Removed"];

const STARRED = "Starred";
const UNSTARRED = "Unstarred";

export const changelogsPRenderer = (props: any) => {
  const text = getPlainTextFromProps(props);
  const firstWord = text.split(" ")[0];

  const isUnstarred = firstWord.includes(UNSTARRED);
  const isStarred = firstWord.includes(STARRED);
  const isAdditionStarter = ADDITION_STARTERS.includes(firstWord);
  const isRemovalStarter = REMOVAL_STARTERS.includes(firstWord);

  return (
    <p
      className={cn(
        isAdditionStarter && "text-green-400",
        isRemovalStarter && "text-red-400"
      )}
    >
      {/* {(isUnstarred || isStarred) && (
        <span className={cn(isUnstarred && "line-through")}>⭐️</span>
      )} */}

      {props.children}
    </p>
  );
};
