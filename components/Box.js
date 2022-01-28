export const Box = ({ className, style, children }, ...props) => {
    console.log(className)
    return (
        <div className={className}>
            <div style={style}>{children}</div>
        </div>
    )
}
