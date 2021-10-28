export const easing = [0.6, -0.05, 0.01, 0.99]

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 1.2, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const fadeUpIn = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 1.2, ease: [0.17, 0.67, 0.83, 0.67] }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4
    }
  }
}
