import { createSample } from "../../Utils/Utils";

export const ArticlesCard = (props) => {
    const {article :{title, body, created_at, votes}} = props;
    const sampleText = createSample(body)

    return (
        <article>
            <h3>{title}</h3>
            <p>{created_at}</p>
            <p>{votes}</p>
            <p>{sampleText}</p>
        </article>
    )
}