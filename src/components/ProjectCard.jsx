/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import React from 'react'
import PropTypes from 'prop-types';

const ProjectCard = ({
    imgSrc,
    title,
    summary,
    impact,
    tags,
    classes,
    featured
}) => {
    return (
        <article className={[
            'group relative overflow-hidden rounded-2xl border border-zinc-50/10 bg-zinc-900/80 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-[0_18px_48px_rgba(56,189,248,0.12)]',
            featured ? 'md:col-span-2' : '',
            classes
        ].filter(Boolean).join(' ')}>
            <div className="relative overflow-hidden rounded-xl">
                <figure className="img-box aspect-[16/10] overflow-hidden">
                    <img
                        src={imgSrc}
                        alt={title}
                        loading='lazy'
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </figure>
            </div>

            <div className="mt-4 flex flex-col gap-3">
                <h3 className="text-lg font-semibold leading-snug text-zinc-50">
                    {title}
                </h3>

                <p className="text-sm leading-6 text-zinc-300">
                    {summary}
                </p>

                <div className="rounded-xl border border-sky-400/20 bg-sky-400/5 p-2.5 text-sm text-sky-100">
                    {impact}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                    {tags.map((label, key) => (
                        <span
                            key={key}
                            className="rounded-full border border-zinc-50/10 bg-zinc-50/5 px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    impact: PropTypes.string,
    tags: PropTypes.array.isRequired,
    classes: PropTypes.string,
    featured: PropTypes.bool
}
export default ProjectCard