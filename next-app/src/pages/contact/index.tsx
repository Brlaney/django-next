import * as React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { fadeInUp, stagger } from '@/lib/framer/home'
import { motion } from 'framer-motion'
import styles from './Contact.module.scss'


export default function Contact() {
  return (
    <motion.div
      className={styles.outer}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <Container className={styles.main} component='main'>
        <motion.div className={styles.inner} variants={stagger}>
          <motion.div className={styles.item} variants={fadeInUp}>
            <Typography
              className={styles.title}
              variant='h2'
              component='h2'
              gutterBottom>
              Contact me
            </Typography>
          </motion.div>

          <form
            action='https://getform.io/f/6772130c-7f9c-4e5b-8642-9bbd15059f1c'
            method='POST'
          >
            <motion.div className={styles.item} variants={fadeInUp}>
              <TextField
                className={styles.formCol}
                type='text'
                name='name'
                id='standard-basic'
                label='Enter your name'
                variant='standard'
                fullWidth={true}
              />
            </motion.div>

            <motion.div className={styles.item} variants={fadeInUp}>
              <TextField
                className={styles.formCol}
                type='email'
                name='email'
                id='standard-basic'
                label='Email address'
                variant='standard'
                fullWidth={true}
              />
            </motion.div>

            <motion.div className={styles.item} variants={fadeInUp}>
              <TextField
                className={styles.formCol}
                type='text'
                name='message'
                id='standard-basic'
                label='Message'
                variant='standard'
                fullWidth={true}
              />
            </motion.div>

            <motion.div className={styles.item} variants={fadeInUp}>
              <Button
                className={styles.button}
                variant='contained'
                type='submit'
                size='large'
                fullWidth={true}
              >
                Send
              </Button>
            </motion.div>
          </form>

        </motion.div>
      </Container>
    </motion.div>
  )
}
