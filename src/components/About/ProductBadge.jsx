const ProductBadge = () => {
    return (
        <div>
            <div
                className="inline-flex items-center border rounded-[36px]"
                style={{
                    width: '100px',
                    height: '33px',
                    paddingTop: '8px',
                    paddingRight: '14px',
                    paddingBottom: '8px',
                    paddingLeft: '14px',
                    borderRadius: '36px',
                    borderWidth: '0.5px',
                    borderColor: '#F0F0F0'
                }}
            >
                <div
                    className="flex items-center justify-center gap-2"
                    style={{
                        width: '359px',
                        height: '17px',
                    }}
                >
                    <span
                        style={{
                            fontFamily: 'Urbanist',
                            fontWeight: "300px",
                            fontSize: '14px',
                            lineHeight: '121%',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            textTransform: 'capitalize',
                            color: '#FFFFFF'
                        }}
                    >
                        About
                    </span>
                    <span
                        style={{
                            fontFamily: 'Urbanist',
                            fontWeight: '700px',
                            fontSize: '14px',
                            lineHeight: '121%',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            textTransform: 'capitalize',
                            color: '#FFFFFF'
                        }}
                    >
                        US
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductBadge;