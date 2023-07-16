'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import styles from './ImageGrid.module.scss'
import {
    setInitialStates,
    moveSideImages,
    scaleCenterImage,
    moveUpTitle,
    introAnimation,
} from './animations'

const ImageGrid = ({ timeline }) => {
    const centerImageRef = useRef(null)
    const leftImagesRef = useRef([])
    const rightImagesRef = useRef([])
    const centerImageWrapperRef = useRef(null)
    const centerImageTitleRef = useRef(null)

    useEffect(() => {
        introAnimation(
            leftImagesRef.current,
            rightImagesRef.current,
            centerImageWrapperRef.current
        )

        timeline &&
            timeline
                .add(setInitialStates(centerImageRef.current))
                .add(
                    moveSideImages(
                        leftImagesRef.current,
                        rightImagesRef.current
                    )
                )
                .add(
                    scaleCenterImage(
                        centerImageWrapperRef.current,
                        centerImageRef.current
                    ),
                    '<'
                )
                .add(moveUpTitle(centerImageTitleRef.current), '<')
    }, [timeline])

    return (
        <section className={styles.imageGrid}>
            <div className={styles.imageGrid__inner}>
                <div
                    className={styles.imageGrid__imageWrapper}
                    ref={(image) => leftImagesRef.current.push(image)}
                >
                    <Image
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        fill
                        className={styles.imageGrid__image}
                        src="/images/practice_2.jpg"
                        alt=""
                    />
                </div>
                <div className={styles.imageGrid__imageWrapper}></div>
                <div
                    onClick={() => timeline.play()}
                    className={styles.imageGrid__imageWrapper}
                    ref={centerImageWrapperRef}
                    data-wrapper-center
                >
                    <div className={styles.textReveal}>
                        <h2
                            className={styles.imageGrid__imageTitle}
                            ref={centerImageTitleRef}
                        >
                            Re:Active
                        </h2>
                    </div>
                    <Image
                        ref={centerImageRef}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        fill
                        data-image-center
                        className={styles.imageGrid__image}
                        src="/images/practice_3.jpg"
                        alt=""
                    />
                </div>
                <div
                    className={styles.imageGrid__imageWrapper}
                    ref={(image) => rightImagesRef.current.push(image)}
                >
                    <Image
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        fill
                        className={styles.imageGrid__image}
                        src="/images/practice_4.jpg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default ImageGrid
