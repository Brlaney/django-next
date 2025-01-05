import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Sidebar from '@/components/Sidebar';
import { AnimatePresence } from 'framer-motion';
import { title, keywords, description } from '@/lib/seo';
import theme from '@/lib/theme/theme';
import '@/styles/globals.scss';

export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;
	const router = useRouter();

	return (
		<CacheProvider value={cache}>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' type='image/png' sizes='32x32' href='/dn.svg' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<title>{title}</title>
			</Head>
			<AnimatePresence>
				<ThemeProvider theme={theme}>
					<CssBaseline />

					{/* Begin wrapped html layout */}
					<div className='container'>
						<Container className='main' component='main'>
							<Grid className='grid' container direction='row' alignItems='center' justifyContent='center'>

								{/* Column 1 - left-side column */}
								<Grid className='gridItem' item md={9} sm={9} xs={12}>
									<Paper className='component' elevation={3}>
										<Component {...pageProps} key={router.route} />
									</Paper>
								</Grid>

								{/* Column 2 - right-side column */}
								<Grid className='gridItem' item md={3} sm={3} xs={12}>
									<Paper className='sidebar' elevation={3}>
										<Sidebar {...pageProps} />
									</Paper>
								</Grid>
							</Grid>
						</Container>
					</div>
					{/* End html wrapped layout */}

				</ThemeProvider>
			</AnimatePresence>
		</CacheProvider>
	)
};
