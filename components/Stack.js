import stackClasses from "../styles/components/stack.module.scss"
import { getClassNameList } from "../utilities/getClassNameList"
import { ContentWrapper } from "./ContentWrapper"

export const Stack = ({ children, space = "md" }) => {
    const classNameList = getClassNameList(space, "stack")
        .map((className) => stackClasses[className])
        .join(" ")

    const { stack } = stackClasses
    return (
        <ContentWrapper>
            <div className={stack + " " + classNameList}>{children}</div>
        </ContentWrapper>
    )
}
