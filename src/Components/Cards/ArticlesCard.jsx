import { createSample, convertTimestampToDate } from "../../Utils/Utils";

export const ArticlesCard = (props) => {
    const {article :{title, body, created_at, votes}} = props;
    const sampleText = createSample(body)
    const {created} = convertTimestampToDate(created_at)
    // console.log(convertTimestampToDate(created_at))
    const { time, date } = created;

    return (
        <article>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{votes}</p>
            <p>{sampleText}</p>
        </article>
    )
}