import cx from 'classnames';
import Typewriter from 'typewriter-effect';

interface TypeTextAnimationProps {
  text: string;
  className?: string;
}
export const TypewriterText = ({ text, className }: TypeTextAnimationProps) => {

  return (
    <div id="typewriter" className={cx(className, "")} >
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(text)
            .pauseFor(2500)
            .start()
            .deleteAll();
        }}
      />
    </div>
  )
}

