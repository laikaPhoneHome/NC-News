import { createSample, convertTimestampToDate } from "../../Utils/Utils";

export const ArticlesCard = (props) => {
    const {article :{title, body, created_at, votes}} = props;
    const sampleText = createSample(body)
    const stamp = convertTimestampToDate(created_at)
    const { created: {time, date} } = stamp;

    return (
        <article className="article-card">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{votes}</p>
            <p>{sampleText}</p>
        </article>
    )
}