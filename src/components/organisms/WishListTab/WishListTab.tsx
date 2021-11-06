import Description from 'components/atoms/Description/Description';
import Footer from 'components/molecules/Footer/Footer';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import TableBody from 'components/organisms/Table/TableBody/TableBody';

import styles from './WishListTab.module.scss';

const WishListTab: React.FC = () => (
  <Wrapper additionalCssClass={styles.wishList__Wrapper}>
    <Description>Lista życzeń nieprzeczytanych książek</Description>
    <div className={styles.temp__Header} />
    <TableBody>
      <p className={styles.temp__Desc}>Wkrótce dostępne</p>
    </TableBody>
    <Footer />
  </Wrapper>
);

export default WishListTab;
