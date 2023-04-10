const RenderMenuItems = (items) => {
    const listItems = items.items.map(
        (element) => {
            if(element.Item != "undefined" && element.Item != "") {
                return (
                    <option value={element.Item}>
                        {element.Item}
                    </option>
                )
            }
            else{
                return;
            }
        }
    )

    return (
        <>
            {listItems}
        </>
    )
}

export default RenderMenuItems;