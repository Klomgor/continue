import { Tool } from "../..";
import { BUILT_IN_GROUP_NAME, BuiltInToolNames } from "../builtIn";
import { createSystemMessageExampleCall } from "../systemMessageTools/buildToolsSystemMessage";

export const viewSubdirectoryTool: Tool = {
  type: "function",
  displayTitle: "View Subdirectory",
  wouldLikeTo: 'view a map of "{{{ directory_path }}}"',
  isCurrently: 'getting a map of "{{{ directory_path }}}"',
  hasAlready: 'viewed a map of "{{{ directory_path }}}"',
  readonly: true,
  group: BUILT_IN_GROUP_NAME,
  isInstant: true,
  function: {
    name: BuiltInToolNames.ViewSubdirectory,
    description: "View the contents of a subdirectory",
    parameters: {
      type: "object",
      required: ["directory_path"],
      properties: {
        directory_path: {
          type: "string",
          description:
            "The path of the subdirectory to view, relative to the root of the workspace",
        },
      },
    },
  },
  systemMessageDescription: createSystemMessageExampleCall(
    BuiltInToolNames.ViewSubdirectory,
    `To view a map of a specific folder within the project, you can use the ${BuiltInToolNames.ViewSubdirectory} tool. This will provide a visual representation of the folder's structure and organization.`,
    [["directory_path", "path/to/subdirectory"]],
  ),
};
