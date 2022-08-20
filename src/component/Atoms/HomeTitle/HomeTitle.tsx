import './HomeTitle.scss';

type TitleProps = {
    title: string
}

export const HomeTitle = ({ title }: TitleProps) => (
  <h1 className="home__title">{title}</h1>
);

export default HomeTitle;
