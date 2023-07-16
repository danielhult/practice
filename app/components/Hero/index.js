'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

import styles from './Hero.module.scss'
import {
    titleAnimation,
    textAnimation,
    fadeInOverlay,
    imageZoom,
} from './animations'

const Hero = () => {
    const imageRef = useRef(null)
    const overlayRef = useRef(null)
    const titleRef = useRef(null)
    const textRefs = useRef([])

    useEffect(() => {
        titleAnimation(titleRef.current)
        textAnimation(textRefs.current)
        fadeInOverlay(overlayRef.current)
    }, [])

    return (
        <section className={styles.hero}>
            <div ref={overlayRef} className={styles.hero__overlay}></div>
            <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                fill
                className={styles.hero__image}
                src="/images/practice_3.jpg"
                alt=""
            />
            <div className={styles.hero__content}>
                <div className={styles.hero__titleWrapper}>
                    <h1 className={styles.hero__title} ref={titleRef}>
                        Re:Active
                    </h1>
                </div>
                <p className={styles.hero__text}>
                    <span>
                        <span ref={(text) => textRefs.current.push(text)}>
                            Introducing Re:Active: a technical women&apos;s
                            workout set blending
                        </span>
                    </span>
                    <span>
                        <span ref={(text) => textRefs.current.push(text)}>
                            style and performance.Elevate your fitness with
                            confidence and
                        </span>
                    </span>
                    <span>
                        <span ref={(text) => textRefs.current.push(text)}>
                            grace. Stay cool and dry with moisture-wicking
                            fabric. Move freely
                        </span>
                    </span>
                    <span>
                        <span ref={(text) => textRefs.current.push(text)}>
                            with four-way stretch and a flattering high-waisted
                            design.
                        </span>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Hero
