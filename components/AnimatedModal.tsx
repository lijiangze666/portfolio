"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from '@/components/ui/animated-modal';
import MagicButton from "@/components/ui/MagicButton";
import {IoLogoWechat} from "react-icons/io5";
import Image from "next/image";

export function AnimatedModal() {
    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger>
                    <MagicButton
                        otherClasses="flex justify-center group/modal-btn"
                        title="微信联系"
                        icon={<IoLogoWechat />}
                        position="right"
                    />

                </ModalTrigger>
                <ModalBody>
                    <ModalContent className="justify-center items-center">
                        <div className="flex flex-col justify-start items-center">
                            <p className="flex justify-center items-center">我的微信二维码</p>
                            <Image src="/qrcode-tm.png" alt="qr" width={300} height={300}></Image>
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
}

