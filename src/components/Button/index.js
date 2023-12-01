import styles from './Button.module.scss';

export default function Button({
  disabled,
  children,
  type,
  onClick,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}