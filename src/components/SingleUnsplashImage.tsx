interface IProps {
    image: IUnsplashResult
}

export default function SingleUnsplashImage({ image }: IProps) {
    return (
        <img className="cursor-pointer" src={image.urls.thumb} alt={image.alt_description} />
    )
}
