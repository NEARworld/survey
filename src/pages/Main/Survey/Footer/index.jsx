import Warning from 'Components/notifications/Warning';
import PrimaryButton from 'Components/buttons/PrimaryButton';
import LeftArrowIcon from 'Components/icons/LeftArrowIcon';
import styles from 'Styles/survey/footer.module.scss';

function Footer({ checked }) {
  const content =
    "Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things. And you'll lose the chance to stay on this plan at the same cost ongoing (regardless of future price increases).";
  return (
    <footer>
      <Warning content={content} />
      <div className={styles.control}>
        <LeftArrowIcon />
        <PrimaryButton
          customClass="btn_cancel_membership"
          text="Cancel Membership"
          parent={{
            name: 'survey',
            checked,
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
