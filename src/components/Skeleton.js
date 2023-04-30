import classNames from 'classnames'

function Skeleton({ times, className }) {
  const outerClassName = classNames(
    'relative',
    'bg-gray-200',
    'overflow-hidden',
    'mb-2.5',
    'rounded',
    className
  )
  const innerClassName = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  )

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={outerClassName}>
        <div className={innerClassName}></div>
      </div>
    ))

  return boxes
}

export default Skeleton
