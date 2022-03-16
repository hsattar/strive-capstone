interface IProps {
    image: IUnsplashResult
}

export default function SingleUnsplashImage({ image }: IProps) {
    return (
        <img src={image.urls.thumb} alt={image.alt_description} />
    )
}
