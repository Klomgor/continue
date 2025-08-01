import { Tool } from "../..";
import { BUILT_IN_GROUP_NAME, BuiltInToolNames } from "../builtIn";
import { createSystemMessageExampleCall } from "../systemMessageTools/buildToolsSystemMessage";

export const readCurrentlyOpenFileTool: Tool = {
  type: "function",
  displayTitle: "Read Currently Open File",
  wouldLikeTo: "read the current file",
  isCurrently: "reading the current file",
  hasAlready: "viewed the current file",
  readonly: true,
  isInstant: true,
  group: BUILT_IN_GROUP_NAME,
  function: {
    name: BuiltInToolNames.ReadCurrentlyOpenFile,
    description:
      "Read the currently open file in the IDE. If the user seems to be referring to a file that you can't see, try using this",
    parameters: {
      type: "object",
      properties: {},
    },
  },
  systemMessageDescription: createSystemMessageExampleCall(
    BuiltInToolNames.ReadCurrentlyOpenFile,
    `To view the user's currently open file, use the ${BuiltInToolNames.ReadCurrentlyOpenFile} tool.
If the user is asking about a file and you don't see any code, use this to check the current file`,
    [],
  ),
};
