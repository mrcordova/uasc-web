import Button from "../FigmaButtons/FigmaButton"
type dialogVariants = "default"

export interface IDialogProps {
  title: string
  text: string
  variant?: dialogVariants
  leftButtonText: string
  rightButtonText: string
  onClickLeft?: () => void
  onClickRight?: () => void
}

type props = IDialogProps

export const ConfirmationDialog = ({
  title,
  text,
  leftButtonText,
  rightButtonText,
  onClickLeft,
  onClickRight
}: props) => {
  return (
    <div className="flex max-h-[215px] max-w-[386px] flex-col items-center rounded-md border-2 px-6 py-7 pb-10">
      <div className="flex flex-col">
        <h1 className="sm:text-h2 font-style: w-full pb-5 text-lg font-bold italic">
          {title}
        </h1>
        <p className="text-p pb-5">{text}</p>
        <span className="text-p flex space-x-4">
          <Button
            data-testid="dialog-left"
            onClick={() => onClickLeft?.()}
            className=""
          >
            {leftButtonText}
          </Button>

          <Button
            data-testid="dialog-right"
            onClick={() => onClickRight?.()}
            className=""
          >
            {rightButtonText}
          </Button>
        </span>
      </div>
    </div>
  )
}

export const Dialog = ({
  title,
  text,
  variant,
  leftButtonText,
  rightButtonText,
  onClickLeft,
  onClickRight
}: props) => {
  switch (variant) {
    case "default":
      return (
        <ConfirmationDialog
          title={title}
          text={text}
          leftButtonText={leftButtonText}
          rightButtonText={rightButtonText}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      )
  }
  return (
    <ConfirmationDialog
      title={title}
      text={text}
      leftButtonText={leftButtonText}
      rightButtonText={rightButtonText}
    />
  )
}

export default ConfirmationDialog
