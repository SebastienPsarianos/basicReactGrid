import { useState, useEffect } from "react"

import stackClasses, { stack } from "../styles/components/stack.module.scss"
import { getClassNameList } from "../utilities/getClassNameList"

export const Stack = ({ children, space = "md" }) => {
    const [classNameList, setClassNameList] = useState([])

    useEffect(() => {
        setClassNameList(
            getClassNameList(space, "stack")
                .map((className) => stackClasses[className])
                .join(" ")
        )
    }, [space])

    return <div className={stack + " " + classNameList}>{children}</div>
}
