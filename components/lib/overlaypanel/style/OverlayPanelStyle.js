import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-overlaypanel {
        margin-top: 10px;
    }

    .p-overlaypanel-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }

    .p-overlaypanel-close {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Animation */
    .p-overlaypanel-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-overlaypanel-leave-to {
        opacity: 0;
    }

    .p-overlaypanel-enter-active {
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-overlaypanel-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-overlaypanel:after,
    .p-overlaypanel:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-overlaypanel:after {
        border-width: 8px;
        margin-left: -8px;
    }

    .p-overlaypanel:before {
        border-width: 10px;
        margin-left: -10px;
    }

    .p-overlaypanel-flipped:after,
    .p-overlaypanel-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-overlaypanel.p-overlaypanel-flipped:after {
        border-bottom-color: transparent;
    }

    .p-overlaypanel.p-overlaypanel-flipped:before {
        border-bottom-color: transparent;
    }
}
`;

const classes = {
    root: ({ instance }) => [
        'p-overlaypanel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-overlaypanel-content',
    closeButton: 'p-overlaypanel-close p-link',
    closeIcon: 'p-overlaypanel-close-icon'
};

export default BaseStyle.extend({
    name: 'overlaypanel',
    css,
    classes
});
