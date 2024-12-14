import { Box } from "@radix-ui/themes";
import { colors } from "../../styles/colors";

const TodoList = ({ children }) => {
  return (
    <Box style={{ height: "100vh", backgroundColor: colors.skyblue }}>
      {children}
    </Box>
  );
};

export default TodoList;
