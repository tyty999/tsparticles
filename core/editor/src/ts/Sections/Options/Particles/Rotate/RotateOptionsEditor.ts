import type { Container } from "tsparticles/dist/Core/Container";
import type { IRotate } from "tsparticles/dist/Options/Interfaces/Particles/Rotate/IRotate";
import { EditorSelectInput, EditorGroup } from "object-gui";

export class RotateOptionsEditor {
    public readonly group: EditorGroup;
    private readonly particles: Container;

    constructor(private readonly parent: EditorGroup, private readonly options: IRotate) {
        this.group = parent.addGroup("rotate", "Rotate");
        this.particles = this.group.data as Container;

        this.addAnimation();
        this.addProperties();
    }

    private addAnimation(): void {
        const group = this.group.addGroup("animation", "Animation");
        const particles = this.particles;
        const options = this.options;

        group.addProperty(
            "enable",
            "Enable",
            options.animation.enable,
            typeof options.animation.enable,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.animation.enable = value;

                    await particles.refresh();
                }
            }
        );

        group.addProperty(
            "speed",
            "Speed",
            options.animation.speed,
            typeof options.animation.speed,
            async (value: number | string | boolean) => {
                if (typeof value === "number") {
                    options.animation.speed = value;

                    await particles.refresh();
                }
            }
        );

        group.addProperty(
            "sync",
            "Sync",
            options.animation.sync,
            typeof options.animation.sync,
            async (value: number | string | boolean) => {
                if (typeof value === "boolean") {
                    options.animation.sync = value;

                    await particles.refresh();
                }
            }
        );
    }

    private addProperties(): void {
        const particles = this.particles;
        const options = this.options;

        const directionSelectInput = this.group.addProperty(
            "direction",
            "Direction",
            options.direction,
            "select",
            async (value: string | number | boolean) => {
                if (value === "clockwise" || value === "counter-clockwise") {
                    options.direction = value;

                    await particles.refresh();
                }
            }
        ) as EditorSelectInput;

        directionSelectInput.addItem("clockwise");
        directionSelectInput.addItem("counter-clockwise");

        this.group.addProperty(
            "path",
            "Path",
            options.path,
            typeof options.path,
            async (value: string | number | boolean) => {
                if (typeof value === "boolean") {
                    options.path = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "random",
            "Random",
            options.random,
            typeof options.random,
            async (value: string | number | boolean) => {
                if (typeof value === "boolean") {
                    options.random = value;

                    await particles.refresh();
                }
            }
        );

        this.group.addProperty(
            "value",
            "Rotate",
            options.value,
            typeof options.value,
            async (value: string | number | boolean) => {
                if (typeof value === "number") {
                    options.value = value;

                    await particles.refresh();
                }
            }
        );
    }
}