
export default function InfoTable({name, base_experience, height, weight}: {name:string, base_experience:number, height: number, weight:number}){
    return (
        <table>
            <tr>
                <td>Name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>Base Experience</td>
                <td>{base_experience}</td>
            </tr>
            <tr>
                <td>Height</td>
                <td>{height}</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>{weight}</td>
            </tr>
        </table>
    )
}