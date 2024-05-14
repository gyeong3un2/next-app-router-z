import BackButton from '../_component/common/BackButton';
import Post from '../_component/Home/Post';
import SearchForm from '../_component/rightSection/SearchForm';
import SearchResult from './_component/SearchResult';
import Tab from './_component/Tab';
import style from './search.module.css';

type Props = {
  searchParams: {
    q: string;
  };
};

export default function Search({ searchParams }: Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  );
}
