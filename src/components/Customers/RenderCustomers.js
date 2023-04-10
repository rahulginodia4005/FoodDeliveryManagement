const RenderCustomers = (customers) => {
    const lisCustomers = customers.customers.map(
        (element) => {
            if(element.Name != '')
                return (
                    <tr>
                        <td>{element.Name}</td>
                        <td>{element.Phone}</td>
                        <td>{element.EmailID}</td>
                    </tr>
                )
            else {
                return;
            }
        }
    )
    
    return (
        <>
            {lisCustomers}

        </>

    )
} 

export default RenderCustomers;