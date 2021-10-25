const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.5) {
                entry.target.classList.add('scroll-enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        })
    }, {
        threshold: [0.5]
    }
)

export default {
    mounted(el) {
        el.classList.add('scroll-before-enter');
        animatedScrollObserver.observe(el);
    },
}