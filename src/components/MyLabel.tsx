import './MyLabel.css'

export type Size = 'normal' | 'h1' | 'h2' | 'h3'

export interface MyLabelProps {
    /**
     * Text to display
     */
    label: string
    /**
     * Label size
     */
    size?: Size
    /**
     * Capitalize
     */
    allCaps?: boolean
    /**
     * Text Color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
    /**
     * Font Color
     */
    fontColor?: string
}

export const MyLabel: React.FC<MyLabelProps> = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor = '#000'
}: MyLabelProps) => {
  return (
    <span
        className={ `${ size } ${ color }` }
        style={{
            color: fontColor,
            textTransform: allCaps ? 'uppercase' : undefined
        }}
    >
        { label }
    </span>
  )
}