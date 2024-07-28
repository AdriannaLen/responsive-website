import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-[5]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut nihil, optio consequatur adipisci nulla tempora cum perferendis rem distinctio iste, voluptatum obcaecati ullam! Consectetur debitis ab aspernatur quae tenetur.</p>
      <Button styles="mt-10" />
      </div>
    </section>
  )
}

export default CardDeal
