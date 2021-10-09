import stack from "../styles/components/stack.module.scss"
import { getClassNameList } from "../utilities/getClassNameList"

export const Stack = ({ children, breakpoints = "md" }) => {
    const classNameList = getClassNameList(breakpoints, "stack")
        .map((className) => stack[className])
        .join(" ")

    console.log(classNameList, "test", getClassNameList(breakpoints), stack)

    return <div className={classNameList}>{children}</div>
}
