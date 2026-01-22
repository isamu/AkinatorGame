/**
 * Akinator Game View Component (React)
 */
import type { ViewComponentProps } from "gui-chat-protocol";
import type { AkinatorData, AkinatorJsonData } from "../core/types";
type ViewProps = ViewComponentProps<AkinatorData, AkinatorJsonData>;
export declare function View({ selectedResult, sendTextMessage }: ViewProps): import("react/jsx-runtime").JSX.Element | null;
export default View;
