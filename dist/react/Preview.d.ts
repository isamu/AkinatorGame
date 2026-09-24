/**
 * Akinator Game Preview Component (React)
 */
import type { PreviewComponentProps } from "gui-chat-protocol";
import type { AkinatorData, AkinatorJsonData } from "../core/types";
type PreviewProps = PreviewComponentProps<AkinatorData, AkinatorJsonData>;
export declare function Preview({ result }: PreviewProps): import("react").JSX.Element | null;
export {};
